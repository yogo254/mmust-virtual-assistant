import { ADD_MESSAGE, GET_TOKEN } from "./types";

import { serverAddress } from "../config/Config";
import axios from "axios";

export const addMessage = (msg, token) => dispatch => {
  const getAudio = (message, token) => {
    let data = `<speak version='1.0' xml:lang='en-US'>
    <voice xml:lang='en-US' xml:gender='Female'
     name='en-US-JessaRUS'>
        ${message}
      </voice>
      </speak>`;

    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let context = new AudioContext();

    var request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://centralus.tts.speech.microsoft.com/cognitiveservices/v1",
      true
    );
    request.setRequestHeader("Authorization", `Bearer ${token}`);
    request.setRequestHeader("Content-Type", "application/ssml+xml");
    request.setRequestHeader(
      "X-Microsoft-OutputFormat",
      "audio-24khz-96kbitrate-mono-mp3"
    );

    request.responseType = "arraybuffer";

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(
        request.response,
        function(buffer) {
          playSound(buffer);
        },
        err => {
          axios.get(`${serverAddress}/api/token`).then(res => {
            token = res.data;
            dispatch({ type: GET_TOKEN, payload: res.data });
          });
        }
      );
    };
    request.send(data);
  };
  const playSound = buffer => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    let context = new AudioContext();

    let source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer; // tell the source which sound to play
    source.connect(context.destination); // connect the source to the context's destination (the speakers)
    source.start(0); // play the source now
    // note: on older systems, may have to use deprecated noteOn(time);
  };

  axios.post(`${serverAddress}/api/bot`, msg).then(res => {
    console.log(res.data);

    getAudio(res.data.content, token);

    dispatch({
      type: ADD_MESSAGE,
      payload: res.data
    });
  });
  dispatch({
    type: ADD_MESSAGE,
    payload: msg
  });
};
