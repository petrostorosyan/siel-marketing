"use client";

import styles from "./chatBot.module.scss";
import { useEffect, useRef, useState } from 'react';

const ChatBot = () => {
  const [active, setActive] = useState(false);
  const messageInputRef = useRef(null);
  const chatBodyRef = useRef(null);

  const toggleChat = () => setActive(true);
  const closeChat = () => setActive(false);

  const addMessage = (text, sender = "bot") => {
    const div = document.createElement("div");
    div.className = `${styles.message} ${styles[sender]}`;
    const bubble = document.createElement("div");
    bubble.className = styles.bubble;
    bubble.textContent = text;
    div.appendChild(bubble);
    chatBodyRef.current?.appendChild(div);
    chatBodyRef.current?.scrollTo(0, chatBodyRef.current.scrollHeight);
  };

  const sendWelcomeMessage = () => {
    addMessage(
      "Welcome to SIEL Marketing! 🚀 I’m Katu, your assistant. How can I help you today? 🤝",
      "bot"
    );
    messageInputRef.current?.focus();
  };

  useEffect(() => {
    if (active) {
      setTimeout(sendWelcomeMessage, 100);
    }
  }, [active]);

  const handleSend = () => {
    const value = messageInputRef.current?.value.trim();
    if (value) {
      addMessage(value, "user");
      messageInputRef.current.value = "";
      // Simulate bot response
      setTimeout(() => {
        addMessage("🤖 I'm still learning. Stay tuned!", "bot");
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <>
      <div className={styles.chatButton} onClick={toggleChat}>
        <div className={styles.chatHoverText}>Chat with Katu</div>
        <img
          src="https://botkatu-d7f7cc122fb6.herokuapp.com/static/logo.png"
          alt="Chat Logo"
        />
      </div>

      <div className={`${styles.chatContainer} ${active ? styles.active : ""}`}>
        <div className={styles.chatHeader}>
          Chat with Katu
          <span className={styles.closeButton} onClick={closeChat}>
            X
          </span>
        </div>
        <div className={styles.chatBody} ref={chatBodyRef}></div>
        <div className={styles.chatFooter}>
          <input
            type="text"
            placeholder="Type your message..."
            ref={messageInputRef}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
