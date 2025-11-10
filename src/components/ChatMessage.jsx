import  RobotProfileImage from '../assets/robot.png';
import UserProfileimage from '../assets/user.png';
// import UserProfileimage from '../assets/image.png';
import './ChatMessage.css'

export function ChatMessage({message, sender}){
        //Destructuring shortcut
        //const message = props.message;
        //const sender = props.sender;
        //const{message , sender} = props;

        /*if(sender==='robot'){
          return (
            <div>
              <img src="images/robot.png" width="50"/>
              {message}
            </div>
          );
        }
        */
          return(
            <div className={
              sender === 'user'
              ? 'chat-message-user'
              : 'chat-message-robot'
            }>
              {sender === 'robot' && (
                <img className="chat-message-profile"src={ RobotProfileImage} width="50"/>)}
                <div className="chat-message-text">
                  {message}
                </div>
              {sender === 'user' && (
                <img className="chat-message-profile"src={UserProfileimage} width="50"/>)}
            </div>
          );
        }