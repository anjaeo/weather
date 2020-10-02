import React from 'react';
import classes from './Conditions.module.css';

const conditions = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
      {props.loading && <div className={classes.Loader}>Loading...</div>}
      {props.responseObj.cod === 200?
        <div>
            <p><strong>{props.responseObj.name}</strong></p>
            <p>Degrees: {Math.round(props.responseObj.main.temp)}<br></br>
               Forecast: {props.responseObj.weather[0].description}.
            </p>
        </div>
      : null
      }
    </div>
  )
}

  export default conditions;