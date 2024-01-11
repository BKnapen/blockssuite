<?php

	function render_block_webkompanen_woocommerce_add_to_cart_button($attributes) {
		
		ob_start();
        // Haal het huidige product-ID op
        global $product;
        $product_id = $product->get_id();

        // Haal de URL op voor het toevoegen van het product aan de winkelwagen
        $add_to_cart_url = $product->add_to_cart_url();

        // Controleer of het product is uitverkocht
        if (!$product->is_in_stock()):
            ?>
            <p class="text-danger">Dit product is uitverkocht.</p>
            <!--Toon de knop "Toevoegen aan winkelwagen" en het inputveld voor het aantal als uitgeschakeld-->
            <a href="<?php echo esc_url($add_to_cart_url); ?>" class="btn btn-primary disabled" disabled>Toevoegen aan winkelwagen</a>
            <div class="form-floating mt-3">
                <input type="number" name="quantity" class="form-control" id="quantity" placeholder="Aantal" value="1" disabled>
                <label for="quantity">Aantal</label>
            </div>
            <?php
        else:
            ?>
            <!-- Toon de knop "Toevoegen aan winkelwagen" en het inputveld voor het aantal -->
            <a href="<?php echo esc_url($add_to_cart_url) ?>" class="btn btn-primary">Toevoegen aan winkelwagen</a>
            <div class="form-floating mt-3">
                <input type="number" name="quantity" class="form-control" id="quantity" placeholder="Aantal" value="1">
                <label for="quantity">Aantal</label>
            </div>
            <?php
        endif;
        ?>
        <!--Voeg JavaScript toe om de winkelwagen automatisch bij te werken wanneer het aantal verandert-->
        <script>
            jQuery('div.woocommerce').on('change', 'input.qty', function() {
                jQuery("[name='update_cart']").prop("disabled", false);
                jQuery("[name='update_cart']").trigger("click");
            });
        </script>
        <?php
        $output = ob_get_contents();
		ob_clean();
		ob_flush();

		return $output;
    }
?>
