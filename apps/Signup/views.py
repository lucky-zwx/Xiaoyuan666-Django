from django.shortcuts import render
from apps.Signup import models



def index(requests):
    return render(requests, 'index.html')


def Signup(requests):
    if requests.method == 'POST':
        group = requests.POST.get('group', '')
        user = requests.POST.get('name', '')
        c_class = requests.POST.get('class', '')
        phone_number = requests.POST.get('phone', '')
        message = requests.POST.get('message', '')
        models.Signup.objects.create(name=user, c_class=c_class, p_number=phone_number, message=message, group=group)
        return render(requests, 'successful.html')
    return render(requests, 'signup.html')
