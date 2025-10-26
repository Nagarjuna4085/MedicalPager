import React, { useState, useEffect, useRef } from "react";
import profileImg from "../../assets/images/profile.jpg";
import { Mic, MicOff, PhoneOff, Volume2 } from "lucide-react";

const AudioCall = ({ isCalling, onEndCall }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [stream, setStream] = useState(null);
  const [callTime, setCallTime] = useState(0); // seconds
  const timerRef = useRef(null);

  // Start/stop microphone when call starts/stops
  useEffect(() => {
    if (isCalling) {
      startAudioStream();
      timerRef.current = setInterval(() => setCallTime((t) => t + 1), 1000);
    } else {
      stopAudioStream();
      clearInterval(timerRef.current);
      setCallTime(0);
    }

    return () => {
      stopAudioStream();
      clearInterval(timerRef.current);
    };
  }, [isCalling]);

  const startAudioStream = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStream(audioStream);
    } catch (err) {
      console.error("Error accessing microphone", err);
    }
  };

  const stopAudioStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleMute = () => {
    if (stream) {
      stream
        .getAudioTracks()
        .forEach((track) => (track.enabled = !track.enabled));
      setIsMuted((prev) => !prev);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  if (!isCalling) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-[1000]">
      {/* Caller Info */}
      <div className="flex flex-col items-center gap-4">
        <img src={profileImg} alt="Caller" className="w-28 h-28 rounded-full" />
        <div className="text-white text-xl font-bold">Alice</div>
        <div className="text-gray-400">{formatTime(callTime)}</div>
      </div>

      {/* Controls */}
      <div className="flex gap-6 mt-8">
        {/* Mute */}
        <button
          onClick={toggleMute}
          className="bg-gray-700 p-4 rounded-full flex items-center justify-center"
        >
          {isMuted ? (
            <MicOff color="white" size={24} />
          ) : (
            <Mic color="white" size={24} />
          )}
        </button>

        {/* End Call */}
        <button
          onClick={() => {
            stopAudioStream();
            onEndCall();
          }}
          className="bg-red-600 p-4 rounded-full flex items-center justify-center hover:bg-red-700"
        >
          <PhoneOff color="white" size={24} />
        </button>

        {/* Optional: Speaker/Volume */}
        <button className="bg-gray-700 p-4 rounded-full flex items-center justify-center">
          <Volume2 color="white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default AudioCall;
