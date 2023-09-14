from django.db import models

# Create your models here.
class stocks(models.Model):
    date = models.DateField()
    trade_code = models.CharField(max_length=10)
    high = models.DecimalField(max_digits=5, decimal_places=1)
    low = models.DecimalField(max_digits=5, decimal_places=1)
    open = models.DecimalField(max_digits=5, decimal_places=1)
    close = models.DecimalField(max_digits=5, decimal_places=1)
    volume = models.IntegerField()

    def __str__(self):
        return self.name