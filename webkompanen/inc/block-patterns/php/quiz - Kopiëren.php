<?php
$url = untrailingslashit( get_template_directory_uri( __FILE__ ) );
/**
 * CTA column left: h1 title column right: lead text button + span text + button
 
     <script>
    function clickRadio(elmnt) {
      var n, i, x;
      n = elmnt.id;
      for (i = 1; i < 5; i++) {
        x = document.getElementById("label" + i);
        if (x) {x.className = x.className.replace(" checkedlabel", "");}
      }
      document.getElementById("label" + n).className += " checkedlabel";
    }
    function clickNextButton(n) {
      submitAnswer(n + 1);
    }
    function submitAnswer(n) {
      var f = document.getElementById("quizform");
      f["nextnumber"].value = n;
      f.submit();
    }
    function startTimer() {
      var tobj = document.getElementById("timespent")
      var t = "0:11";
      var s = 11;
      var d = new Date();
      var timeint = setInterval(function () {
        s += 1;
        d.setMinutes("0");
        d.setSeconds(s);
        min = d.getMinutes();
        sec = d.getSeconds();
        if (sec < 10) sec = "0" + sec;
        document.getElementById("timespent").value = min + ":" + sec;
      }, 1000);
      tobj.value = t;
    }
    if (window.addEventListener) {              
      window.addEventListener("load", startTimer);
    } else if (window.attachEvent) {                 
      window.attachEvent("onload", startTimer);
    }
    
    </script>
 */
ob_start();
?>
<!-- 
	wp:webkompanen/section 
	{
		"classes":"bg-primary spacer-y-3"
	} 
-->
<section>	
	<!--
		wp:webkompanen/container 
		{
			"classes":"container"
		} 
	-->
  	<div class="container">
		<!-- 
			wp:webkompanen/div 
			{
				"classes":"quiz"
			} 
		-->
		<div class="quiz">	
			<!-- 
				wp:webkompanen/div 
				{
					"classes":"question-container"
				} 
			-->
			<div class="question-container">
				<!-- 
					wp:webkompanen/paragraph 
					{
						"classes":"question-paragraph",
						"content":"Vraag"
					} 
				-->
    			<p class="question-paragraph">Vraag</p>
				<!-- /wp:webkompanen/paragraph -->
				<!-- 
					wp:webkompanen/form 
					{
						"role":"form",
						"classes":"answer-form",
						"name":"answer-form"
					} 
				-->
    			<form role="form" class="answer-form" name="answer-form">
					<!-- 
						wp:webkompanen/input 
						{
							"type":"hidden",
							"classes":"start-time",
							"name":"start-time"
						} 
					-->
      				<input type="hidden" class="start-time" name="start-time" />
					<!-- /wp:webkompanen/input -->
					<!-- 
						wp:webkompanen/input 
						{
							"type":"hidden",
							"name":"right-answer",
							"value":"test"
						} 
					-->
      				<input type="hidden" name="right-answer" value="test" />
					<!-- /wp:webkompanen/input -->
      				<!-- 
						wp:webkompanen/div 
						{
							"classes":"form-check"
						}
					-->
					<div class="form-check">
						<!-- 
							wp:webkompanen/input 
							{
								"classes":"form-check-input",
								"type":"radio",
								"name":"flexRadioDefault",
								"id":"flexRadioDefault1"
							} 
						-->
  						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
						<!-- /wp:webkompanen/input -->
						<!-- 
							wp:webkompanen/label 
							{
								"classes":"form-check-label",
								"for":"flexRadioDefault1"
							} 
						-->
  						<label class="form-check-label" for="flexRadioDefault1">
							<!-- 
								wp:webkompanen/paragraph 
								{
								"classes":"question-paragraph",
								"content":"Optie 1"
								} 
							-->
    						<p>Optie 1</p>
							<!-- /wp:webkompanen/paragraph -->
  						</label>
						<!-- /wp:webkompanen/label -->
					</div>
					<!-- /wp:webkompanen/div -->
      				<!-- 
						wp:webkompanen/div 
						{
							"classes":"form-check"
						}
					-->
					<div class="form-check">
						<!-- 
							wp:webkompanen/input 
							{
								"classes":"form-check-input",
								"type":"radio",
								"name":"flexRadioDefault",
								"id":"flexRadioDefault2"
							} 
						-->
  						<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
							<!-- /wp:webkompanen/input -->
						<!-- 
							wp:webkompanen/label 
							{
								"classes":"form-check-label",
								"for":"flexRadioDefault2"
							} 
						-->
  						<label class="form-check-label" for="flexRadioDefault2">
							<!-- 
								wp:webkompanen/paragraph 
								{
								"classes":"question-paragraph",
								"content":"Optie 2"
								} 
							-->
    						<p>Optie 2</p>
							<!-- /wp:webkompanen/paragraph -->
  						</label>
						<!-- /wp:webkompanen/label -->
					</div>
					<!-- /wp:webkompanen/div -->
    			</form>
				<!-- wp:webkompanen/form -->
			</div>
    		<!-- /wp:webkompanen/div -->
		</div>
    	<!-- /wp:webkompanen/div -->
	</div>
	<!-- /wp:webkompanen/container -->
</section>
<!-- /wp:webkompanen/section -->
<?php
$output = ob_get_contents();
ob_clean();
return array(
	'title'      => __( 'Quiz', 'webcompanen' ),
	'categories' => array( 'quiz' ),
	'blockTypes' => array( 'webcompanen/template-part/quiz' ),
	'content'    => $output
);