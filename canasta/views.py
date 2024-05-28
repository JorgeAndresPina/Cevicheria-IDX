from django.shortcuts import render

# Create your views here.
"""
tengo que acerlo con cada template que tenga
llevo index, cevicheria 
"""

def index(request):
    return render (request,'index.html')

def ceviches(request):
    return render (request,'ceviches.html')