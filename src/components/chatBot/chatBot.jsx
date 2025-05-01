'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './chatBot.module.scss';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage("Welcome to SIEL Marketing! 🚀 I’m Katu, your assistant. How can I help you today? 🤝", 'bot');
    }
  }, [isOpen]);

  const addMessage = (content, sender) => {
    setMessages(prev => [...prev, { content, sender }]);
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    addMessage(userMessage, 'user');
    setInput('');

    const typingId = Symbol('typing');
    addMessage(typingId, 'typing');

    try {
      const res = await fetch('https://botkatu-d7f7cc122fb6.herokuapp.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          user_id: localStorage.getItem('user_id') || null,
        }),
      });

      const data = await res.json();
      if (!localStorage.getItem('user_id')) {
        localStorage.setItem('user_id', data.user_id);
      }

      setMessages(prev => prev.filter(m => m.sender !== 'typing'));
      addMessage(data.response, 'bot');
    } catch {
      setMessages(prev => prev.filter(m => m.sender !== 'typing'));
      addMessage("I'm sorry, I couldn't process your request. Please try again later.", 'bot');
    }
  };

  return (
    <>
      <div className={styles.chatButton} onClick={() => setIsOpen(true)}>
        <div className={styles.chatHoverText}>Chat with Katu</div>
        <img src="https://botkatu-d7f7cc122fb6.herokuapp.com/static/logo.png" alt="Chat Logo" />
      </div>

      {isOpen && (
        <div className={`${styles.chatContainer} ${styles.active}`}>
          <div className={styles.chatHeader}>
            Chat with Katu
            <span className={styles.closeButton} onClick={() => setIsOpen(false)}>X</span>
          </div>

          <div className={styles.chatBody} ref={chatBodyRef}>
            {messages.map((msg, index) =>
              msg.sender === 'typing' ? (
                <div key={index} className={`${styles.message} ${styles.bot}`}>
                  <div className={styles.typingIndicator}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`${styles.message} ${styles[msg.sender]}`}
                >
                  {msg.sender === 'bot' && (
                    <img
                      className={styles.avatar}
                      src="https://botkatu-d7f7cc122fb6.herokuapp.com/static/logo.png"
                      alt="Bot"
                    />
                  )}
                  <div className={styles.bubble}>{msg.content}</div>
                  {msg.sender === 'user' && (
                    <img
                      className={styles.avatar}
                      src="https://botkatu-d7f7cc122fb6.herokuapp.com/static/user-avatar.png"
                      alt="User"
                    />
                  )}
                </div>
              )
            )}
          </div>

          <div className={styles.chatFooter}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
