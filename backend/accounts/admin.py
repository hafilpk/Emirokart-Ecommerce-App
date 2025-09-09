from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ("username", "email", "phone", "is_customer", "is_seller", "is_staff")
    fieldsets = UserAdmin.fieldsets + (
        ("Extra Info", {"fields": ("phone", "address", "is_customer", "is_seller")}),
    )

