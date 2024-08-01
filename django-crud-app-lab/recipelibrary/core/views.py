from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .forms import logForm

from .models import Recipe

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def recipe_index(request):
    recipes = Recipe.objects.all()
    return render(request, 'recipes/index.html', {'recipes': recipes})

def recipe_detail(request, recipe_id):
    recipe = Recipe.objects.get(id=recipe_id)
    log_form = logForm()
    return render(request, 'recipes/detail.html', {
        'recipe': recipe,
        'log_form': log_form
        })

class RecipeCreate(CreateView):
    model = Recipe
    fields = '__all__'
    success_url = '/recipes/'

class RecipeUpdate(UpdateView):
    model = Recipe
    fields = ['ingrediants', 'method', 'source']

class RecipeDelete(DeleteView):
    model = Recipe
    success_url = '/recipes/'

def add_log(request, recipe_id):
    form = logForm(request.POST)
    if form.is_valid():
        log = form.save(commit=False)
        log.recipe_id = recipe_id
        log.save()
    return redirect('recipe-detail', recipe_id=recipe_id)