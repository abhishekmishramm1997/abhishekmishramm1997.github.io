from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
	template = loader.get_template('index.html')
	return HttpResponse(template.render())

def stocks(request):
	template = loader.get_template('stocks.html')
	return HttpResponse(template.render())

def join(request):
	template = loader.get_template('join.html')
	return HttpResponse(template.render())

def discussions(request):
	template = loader.get_template('discussions.html')
	return HttpResponse(template.render())

def news(request):
	template = loader.get_template('news.html')
	return HttpResponse(template.render())

def team(request):
	template = loader.get_template('team.html')
	return HttpResponse(template.render())

def contact(request):
	template = loader.get_template('contact.html')
	return HttpResponse(template.render())

def review(request):
	template = loader.get_template('review.html')
	return HttpResponse(template.render())

def beta(request):
	template = loader.get_template('beta.html')
	return HttpResponse(template.render())

def profile(request):
	template = loader.get_template('profile.html')
	return HttpResponse(template.render())

def login(request):
	template = loader.get_template('login.html')
	return HttpResponse(template.render())

def article(request):
	template = loader.get_template('article.html')
	return HttpResponse(template.render())

def discussion(request):
	template = loader.get_template('discussion.html')
	return HttpResponse(template.render())

def search(request):
	template = loader.get_template('search.html')
	return HttpResponse(template.render())

def analysis(request):
	template = loader.get_template('analysis.html')
	return HttpResponse(template.render())

def details(request):
	template = loader.get_template('details.html')
	return HttpResponse(template.render())

def about(request):
	template = loader.get_template('about.html')
	return HttpResponse(template.render())

def privacy(request):
	template = loader.get_template('privacy.html')
	return HttpResponse(template.render())

def terms(request):
	template = loader.get_template('terms.html')
	return HttpResponse(template.render())

def market(request):
	template = loader.get_template('market.html')
	return HttpResponse(template.render())

def industry(request):
	template = loader.get_template('industry.html')
	return HttpResponse(template.render())

def ind_analysis(request):
	template = loader.get_template('ind_analysis.html')
	return HttpResponse(template.render())