var data = JSON.parse(sessionStorage.getItem("sentiments"));
var textInput = sessionStorage.getItem("text_input");

$(function() {
	var emotionList = $('.emotionShower');
	var emotionInput = $('.emotionShowInput');
	console.log(data.scored_labels[0]);
	var faceClass = "";
	emotionInput.text(textInput);

	for(var i=0; i<data.scored_labels.length; i++){
		console.log(data.scored_labels[i]);
		if(data.scored_labels[i].label == "joy"){
			faceClass = "smile"
		} 
		if(data.scored_labels[i].label == "anger"){
			faceClass = "angry"
		}
		if(data.scored_labels[i].label == "sadness"){
			faceClass = "sad-tear"
		}
		if(data.scored_labels[i].label == "fear"){
			faceClass = "tired"
		}
		if(data.scored_labels[i].label == "surprise"){
			faceClass = "surprise"
		}
		if(data.scored_labels[i].label == "love"){
			faceClass = "grin-hearts"
		}
		emotionList.append(`<div Class='emotion-item'>
		<div Class="emotion-icon">
			<i Class="fa-regular fa-face-`+ faceClass +`"></i>
		</div>
		<div Class="emotion-score">
			<p>`+ data.scored_labels[i].label + ": " + (data.scored_labels[i].score * 100).toFixed(2) + `%</p>
		</div>
	</div>`);
	}
});
