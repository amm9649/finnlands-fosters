from django.db import models
from django.contrib.auth.models import User, Group, Permission
from api_adopt.models import AdoptionContract

class FinnlandsUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    contract = models.OneToOneField(AdoptionContract, on_delete=models.SET_NULL, null=True)

    class Meta:
        permissions = (
            ('can_add_adoptables', 'to provide ability to add adoptables'),
            ('can_edit_adoptables', 'to provide ability to edit adoptables'),
            ('can_mark_adoptables', 'to provide ability to bookmark adoptables'),
            ('can_submit_contract', 'to provide ability to submit adoption contract'),
            ('can_view_all_contracts', 'to provide ability to view all contracts'),
            ('can_approve_reject_contract', 'to provide ability to approve or reject a contract'),
            )