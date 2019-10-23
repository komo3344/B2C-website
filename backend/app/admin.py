from django.contrib import admin
from .models import User, Store, Review, Review_file, Review_comment

admin.site.register(User)
admin.site.register(Store)
admin.site.register(Review)
admin.site.register(Review_file)
admin.site.register(Review_comment)

