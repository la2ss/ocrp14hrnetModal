# The modal sucess with React 

The modal dialog that we are currently using to confirm when new records are created 

## Installation
### NPM
```js
npm i form_modal_sucess
```
## How to use it
### Import
import Modal from "form_modal_sucess";

### Component
```js
const myComponent = ({closeModal}) => {
    return(
        <div className={closeModal ? "modal" : "modal_display"}>
            <div className="sucessModal">
            <img src="logo.png" className="logo" alt="logo" />
               <p>Employee createded!</p>
                <div className="closeModal">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )
}
export default myComponent
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the npm Docs (https://docs.npmjs.com/).

