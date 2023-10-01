const myVideo = document.createElement('video');
const videoGrid = document.getElementById('video-grid');
// let start_button = document.querySelector("#start-record");
let download_link = document.querySelector("#download-video");

// let stop_button = document.querySelector("#stop-record");
let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];


async function getMedia() {
  try {
      camera_stream = await navigator.mediaDevices.getUserMedia({   video: { width: 1280, height: 720 },audio: true });
      console.log('stream', camera_stream);
      
      myVideo.srcObject = camera_stream;
      myVideo.muted = true;
      
      videoGrid.appendChild(myVideo);
    
      myVideo.play();
  } catch (err) {
      console.log('err', err);
  }
}


 function start_button() {
  // set MIME type of recording as video/webm
  console.log('camera_stream',camera_stream);
  media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });

  // event : new recorded video blob available 
  media_recorder.addEventListener('dataavailable', function(e) {
  blobs_recorded.push(e.data);
  });

  // event : recording stopped & all blobs sent
  media_recorder.addEventListener('stop', function() {
    // create local object URL from the recorded video blobs
    let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
    download_link.href = video_local;
  });

  // start recording with each recorded blob having 1 second video
  media_recorder.start(1000);
};
function stop_button() {
  media_recorder.pause();

media_recorder.stop(); 
};
  // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
  //   console.log('stream', stream);
  //   const myVideo = document.createElement('video');
  //   myVideo.srcObject = stream;
  //   myVideo.muted = true;
    
  //   const videoGrid = document.getElementById('video-grid');
  //   videoGrid.appendChild(myVideo);
  
  //   myVideo.play();
  // }).catch((err) => {
  //   console.log(err);
  // });
  