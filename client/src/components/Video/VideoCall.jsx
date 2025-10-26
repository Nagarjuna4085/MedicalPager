import React, { useEffect, useRef, useState } from "react";
import { PhoneOff, Mic, MicOff, Video, VideoOff } from "lucide-react";

const VideoCall = ({ isVideoCalling, onEndCall }) => {
  const localVideoRef = useRef(null);
  const streamRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  useEffect(() => {
    if (isVideoCalling) startLocalStream();
    else stopLocalStream();
    return () => stopLocalStream();
  }, [isVideoCalling]);

  const startLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      streamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopLocalStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const toggleMic = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled; // toggle on/off
        setIsMuted(!track.enabled);
      });
    }
  };

  const toggleCamera = () => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled; // toggle on/off
        setIsCameraOff(!track.enabled);
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center transition-transform duration-500 z-[1000] ${
        isVideoCalling ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Your Camera Preview */}
      <div className="relative w-[60vw] h-[60vh] bg-gray-800 rounded-2xl overflow-hidden">
        <video
          ref={localVideoRef}
          className={`w-full h-full object-cover ${
            isCameraOff ? "opacity-0" : "opacity-100"
          }`}
          autoPlay
          muted
          playsInline
        />
        {isCameraOff && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg bg-gray-900">
            Camera Off
          </div>
        )}
      </div>

      {/* Call Controls */}
      <div className="flex gap-6 mt-6">
        <button onClick={toggleMic} className="bg-gray-700 p-3 rounded-full">
          {isMuted ? (
            <MicOff color="white" size={22} />
          ) : (
            <Mic color="white" size={22} />
          )}
        </button>

        <button onClick={toggleCamera} className="bg-gray-700 p-3 rounded-full">
          {isCameraOff ? (
            <VideoOff color="white" size={22} />
          ) : (
            <Video color="white" size={22} />
          )}
        </button>

        <button
          onClick={() => {
            stopLocalStream();
            onEndCall();
          }}
          className="bg-red-600 p-3 rounded-full hover:bg-red-700"
        >
          <PhoneOff color="white" size={22} />
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
