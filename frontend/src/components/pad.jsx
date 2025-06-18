import React from 'react';

function pad(props) {
    const [on, setOn] = React.useState(props.on);
  return (
    <div>

        <button style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
      
    </div>
  );
}

export default pad;
