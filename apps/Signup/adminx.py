from django.contrib import admin
from .models import Signup
import xadmin
from xadmin import views
from xadmin.plugins.auth import UserAdmin

class SignupAdmin(object):
    list_display = ['name', 'c_class', 'group', 'signtime']
    search_fields = ['name', 'c_class', 'group', 'signtime']
    list_filter = ['c_class', 'group', 'signtime']


xadmin.site.register(Signup, SignupAdmin)


class GlobalSetting(object):
    site_title = '社团报名管理'   #设置头标题
    site_footer = '你大爷制作'  #设置脚标题
    menu_style = 'accordion'

xadmin.site.register(views.CommAdminView, GlobalSetting)


# 配置后台主题
class BaseSetting(object):
    enable_themes = True
    use_bootswatch = True


xadmin.site.register(views.BaseAdminView, BaseSetting)
