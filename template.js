
(function ($) {
    /*EQUAL HEIGHTS FUNC*/

    $.fn.equalHeights = function () {
        var maxHeight = 0,
            $this = $(this);

        $this.each(function () {
            var height = $(this).innerHeight();

            if (height > maxHeight) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };
})(jQuery);  
  
