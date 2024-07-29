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
        return reverse('recipe-detail', kwargs={'recipe.id': self.id})
