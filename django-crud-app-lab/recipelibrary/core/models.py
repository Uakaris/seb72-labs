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

RATINGS = (
    (1, '⭐️'),
    (2, '⭐️⭐️'),
    (3, '⭐️⭐️⭐️'),
    (4, '⭐️⭐️⭐️⭐️'),
    (5, '⭐️⭐️⭐️⭐️⭐️')
)

class log(models.Model):
    date = models.DateField('Meal Date')
    notes = models.TextField(max_length=256)
    rating = models.IntegerChoices(
        max_length=5,
        choices=RATINGS,
        default=RATINGS[0][0]
    )
    

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.get_rating_display()} meal made on {self.date}. See notes: {self.notes}."