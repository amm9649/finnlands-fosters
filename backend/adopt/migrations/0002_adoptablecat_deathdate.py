# Generated by Django 4.1.2 on 2022-11-11 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adopt', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='adoptablecat',
            name='deathDate',
            field=models.DateField(blank=True, null=True),
        ),
    ]