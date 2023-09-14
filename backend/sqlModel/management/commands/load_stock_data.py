import json
from django.core.management.base import BaseCommand
from sqlModel.models import stocks  # Import your model here

class Command(BaseCommand):
    help = 'Load stock data from a JSON file into the database'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str, help='Path to the JSON file to load')

    def handle(self, *args, **options):
        json_file_path = options['json_file']

        # Open and load data from the JSON file
        with open('stock_market_data.json', 'r') as json_file:
            data = json.load(json_file)

        # Loop through the JSON data and create stock instances
        for item in data:
            volume = int(item['volume'].replace(',', ''))
            high = item['high'].replace(',', '')
            low= item['high'].replace(',', '')
            open1= item['high'].replace(',', '')
            close = item['high'].replace(',', '')
            stock_instance = stocks(
                date=item['date'],
                trade_code=item['trade_code'],
                high=high,
                low=low,
                open=open1,
                close=close,
                volume=volume
            )
            stock_instance.save()
            self.stdout.write(self.style.SUCCESS(f'Successfully inserted data for {item}'))
