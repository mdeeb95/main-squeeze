UPDATE posters
SET item_name = ${change_name}, item_description = ${change_description}, specs = ${change_specs}, price = ${change_price}, item_url = ${change_picture}, link = ${change_buy}
WHERE id = ${id};