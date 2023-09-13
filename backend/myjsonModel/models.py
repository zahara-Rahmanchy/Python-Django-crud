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

    def set_volume(self, volume_str):
        # Remove commas and convert to integer
        self.volume = int(volume_str.replace(',', ''))

    def get_volume_display(self):
        # Format volume with commas when displaying
        return '{:,}'.format(self.volume)
