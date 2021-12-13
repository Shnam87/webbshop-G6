$(".product").slice(0, 3).show();
$(".btn-load").on("click", function(){
    $(".product:hidden").slice(0, 3).show();


    if($(".product:hidden").length ==0)
		{
			$(".btn-load").fadeOut();
		}
	})