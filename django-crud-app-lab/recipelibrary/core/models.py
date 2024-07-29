from django.db import models
from django.urls import reverse

class Recipe(models.Model):
    name = models.CharField(max_length=256)
    ingrediants = models.TextField(max_length=2000)
    method = models.TextField(max_length=2000)
    source = models.URLField(max_length=256)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('recipe-detail', kwargs={'recipe_id': self.id})

DIETS = (
    ('M', 'Meat'),
    ('V', 'Vegetarian'),
    ('VG', 'Vegan'),
    ('P', 'Pescatarian'),
    ('GF', 'Gluten Free'),
)

TYPES = (
    ('B', 'Breakfast'),
    ('L', 'Lunch'),
    ('D', 'Dinner'),
    ('S', 'Snack'),
)

class Category(models.Model):
    cuisine = models.CharField(max_length=50)
    dietary = models.CharField(
        max_length=5,
        choices=DIETS,
        default=DIETS[0][0],
    )
    type = models.CharField(
        max_length=1,
        choices=TYPES,
        default=TYPES[0][0]
    )

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.cuisine} dish that is best suited for {self.get_type_display()}. Dietary category: {self.get_dietary_display()}"