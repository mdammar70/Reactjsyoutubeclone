import React from 'react'

const ChatMessages = ({name,text}) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img
        className="h-8 mr-3"
        alt="avatar"
        src="https://imgs.search.brave.com/Y61c9jRwIkLPF29tFBF212oqdWjSIY6LqfYjMTLjgOI/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/Z2VuZXJpYy1hdmF0/YXItaWNvbi0zLnBu/Zw"
          ></img>
          <span className='text-bold p-1'>{name}</span>
          <span className='p-1'>{ text}</span>
    </div>
  );
}

export default ChatMessages