from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Store, Review, Review_file, Review_comment


class MyUserAdmin(UserAdmin):
    model = User

    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('role_profile', 'user_type')}),
    )
    readonly_fields = ['username', 'email', 'role_profile', 'user_type']    # 읽기전용


class StoreAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(StoreAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs.all()
        return qs.filter(u_id=request.user)


class Review_comment_Admin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(Review_comment_Admin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs.all()
        return qs.filter(u_id=request.user)


admin.site.register(User, MyUserAdmin)
admin.site.register(Store, StoreAdmin)
admin.site.register(Review)
admin.site.register(Review_file)
admin.site.register(Review_comment, Review_comment_Admin)
