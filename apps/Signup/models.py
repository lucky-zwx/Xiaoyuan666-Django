from django.db import models
from datetime import datetime


class Signup(models.Model):
    name = models.CharField(max_length=20, verbose_name='姓名', default='')
    c_class = models.CharField(max_length=50, verbose_name='班级', default='')
    p_number = models.CharField(max_length=11, default='', verbose_name='电话')
    group = models.CharField(max_length=50, verbose_name='社团名称', default='')
    signtime = models.DateTimeField(verbose_name='报名时间', default=datetime.now)
    message = models.TextField(default='', verbose_name='建议')

    class Meta:
        verbose_name = '报名表'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.group
