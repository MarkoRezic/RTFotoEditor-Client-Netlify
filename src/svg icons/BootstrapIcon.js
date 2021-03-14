const BootstrapIcon = (props) => {
    switch (props.type) {
        case 0: //House
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                    <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                </svg>
            )
        case 1: //Camera
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera-fill navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path fillRule="evenodd" d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg>
            )
        case 2: //Key
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-key-fill navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
            )
        case 3: //Person Add
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-plus-fill navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 4: //Mail
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
            )
        case 5: //List Lines
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            )
        case 6: //Profile
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                    <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg>
            )
        case 7: //Gear
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
                </svg>
            )
        case 8: //Power Button
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z" />
                    <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" />
                </svg>
            )
        case 9: //Crop
            return (
                <svg width="1.125em" height="1.125em" viewBox="0 0 18 18" className="bi bi-crop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5zm2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5z" />
                </svg>
            )
        case 10: //Resize
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bounding-box-circles" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
            )
        case 11: //Contrast
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                </svg>
            )
        case 12: //Gear Spiked
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear-wide-connected" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 0 0-9.995 4.998 4.998 0 0 0 0 9.996z" />
                    <path fillRule="evenodd" d="M7.375 8L4.602 4.302l.8-.6L8.25 7.5h4.748v1H8.25L5.4 12.298l-.8-.6L7.376 8z" />
                </svg>
            )
        case 13: //Sliders
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
                </svg>
            )
        case 14: //Brightness
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    <path fillRule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
            )
        case 15: //Droplet
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-droplet-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                    <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                </svg>
            )
        case 16: //Eye
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
            )
        case 17: //Eye Slash
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z" />
                </svg>
            )
        case 18: //Verified Check
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ "verticalAlign": "text-bottom" }} fill="#4CAF50" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
            )
        case 19: //X
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            )
        case 20: //Send PaperPlane
            return (
                <svg className="svg-icon" viewBox="1 0 18 18">
                    <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
                </svg>
            )
        case 21: //Post File
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" className="bi bi-file-post navIcon" fill="#ccc" viewBox="0 0 16 16">
                    <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
            )
        case 22: //Square Half
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-square-half" viewBox="0 0 16 16">
                    <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z" />
                </svg>
            )
        case 23: //Brightness
            return (
                <svg width="20" height="20" viewBox="0 0 16 16" className="bi bi-brightness-high-fill" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                    <path fillRule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
            )
        case 24: //Contrast
            return (
                <svg width="20" height="20" viewBox="0 0 16 16" className="bi bi-circle-half" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                </svg>
            )
        case 25: //Exposure
            return (
                <svg width="20px" height="20px" viewBox="1 1 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons" stroke="none" strokeWidth="1" fill="#ccc" fillRule="evenodd">
                        <g id="Rounded" transform="translate(-545.000000, -2771.000000)">
                            <g id="Image" transform="translate(100.000000, 2626.000000)">
                                <g id="-Round-/-Image-/-exposure" transform="translate(442.000000, 142.000000)">
                                    <g>
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M6.75,7 L10.25,7 C10.66,7 11,7.34 11,7.75 C11,8.16 10.66,8.5 10.25,8.5 L6.75,8.5 C6.34,8.5 6,8.16 6,7.75 C6,7.34 6.34,7 6.75,7 Z M18,19 L5,19 L19,5 L19,18 C19,18.55 18.55,19 18,19 Z M14.5,16 L14.5,17.25 C14.5,17.66 14.84,18 15.25,18 C15.66,18 16,17.66 16,17.25 L16,16 L17.25,16 C17.66,16 18,15.66 18,15.25 C18,14.84 17.66,14.5 17.25,14.5 L16,14.5 L16,13.25 C16,12.84 15.66,12.5 15.25,12.5 C14.84,12.5 14.5,12.84 14.5,13.25 L14.5,14.5 L13.25,14.5 C12.84,14.5 12.5,14.84 12.5,15.25 C12.5,15.66 12.84,16 13.25,16 L14.5,16 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            )
        case 26: //Saturation
            return (
                <svg width="20" height="20" viewBox="0 0 16 16" className="bi bi-droplet-half" fill="url(#grad4)" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="30%" style={{ 'stopColor': 'rgb(130,130,130)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,255)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                    <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                </svg>
            )
        case 27: //Vibrance
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="url(#grad3)" className="bi bi-broadcast" viewBox="0 0 16 16">
                    <defs>
                        <radialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(255,100,0)', 'stopOpacity': 1 }} />
                        </radialGradient>
                    </defs>
                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 0 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
            )
        case 28: //Pie Chart
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                    <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
                </svg>
            )
        case 29: //Square
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={props.fill} className="bi bi-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                </svg>
            )
        case 30: //Check
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#13EC22" className="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
            )
        case 31: //X
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF4B4E" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            )
        case 32: //Blur
            return (
                <svg height="20" width="20">
                    <defs>
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(50,50,50)', 'stopOpacity': 1 }} />
                            <stop offset="85%" style={{ 'stopColor': 'rgb(50,50,50)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(200,200,200)', 'stopOpacity': 1 }} />
                        </radialGradient>
                    </defs>
                    <ellipse cx="10" cy="10" rx="10" ry="10" fill="url(#grad1)" />
                </svg>
            )
        case 33: //Clip
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-slash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
                </svg>
            )
        case 34: //Hue
            return (
                <svg height="20" width="20">
                    <defs>
                        <linearGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="35%" style={{ 'stopColor': 'rgb(255,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="55%" style={{ 'stopColor': 'rgb(0,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,255)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <ellipse cx="10" cy="10" rx="10" ry="10" fill="#ccc" />
                    <ellipse cx="10" cy="10" rx="8" ry="8" fill="url(#grad2)" />
                </svg>
            )
        case 35: //Crop
            return (
                <svg width="23" height="23" viewBox="0 0 18 18" className="bi bi-crop" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5zm2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5z" />
                </svg>
            )
        case 36: //Gamma
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1">
                    <text x="10" y="13" fontFamily="serif" fontSize="25" fill="#ccc" textAnchor="middle">
                        γ
                    </text>
                </svg>
            )
        case 37: //Lightness Tab
            return (
                <svg height="22" width="22">
                    <defs>
                        <linearGradient id="grad5" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="50%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <ellipse cx="10" cy="10" rx="10" ry="10" fill="#ccc" />
                    <ellipse cx="10" cy="10" rx="8" ry="8" fill="url(#grad5)" />
                </svg>
            )
        case 38: //Rotate
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#ccc" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                </svg>
            )
        case 39: //Arrow Up Square
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            )
        case 40: //Arrow Clockwise
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
            )
        case 41: //Aspect Ratio
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-aspect-ratio" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                </svg>
            )
        case 42: //Width Resize
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrows-expand" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z" transform="rotate(90, 8, 8)" />
                </svg>
            )
        case 43: //Height Resize
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrows-expand" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z" />
                </svg>
            )
        case 44: //Mirror Vertical
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-symmetry-vertical" viewBox="0 0 16 16">
                    <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.485a.5.5 0 0 1 .563.246l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.485zM10 4.461V13h4.658L10 4.46z" />
                </svg>
            )
        case 45: //Mirror Horizontal
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-symmetry-horizontal" viewBox="0 0 16 16">
                    <path d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z" />
                </svg>
            )
        case 46: //Drop Full
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="url(#grad6)" className="bi bi-droplet-fill" viewBox="0 0 16 16">
                    <defs>
                        <radialGradient id="grad6" cx="50%" cy="240%" r="240%" fx="50%" fy="110%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="10%" style={{ 'stopColor': 'rgb(255,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="55%" style={{ 'stopColor': 'rgb(255,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="60%" style={{ 'stopColor': 'rgb(0,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(80,80,255)', 'stopOpacity': 1 }} />
                        </radialGradient>
                    </defs>
                    <path fillRule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z" />
                </svg>
            )
        case 47: //RGB
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" className="bi bi-stop-fill" viewBox="0 0 23 23">
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" transform="translate(5, 0) scale(0.8)" fill="#ff0000" />
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" transform="translate(0, 10) scale(0.8)" fill="#00dd00" />
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" transform="translate(10, 10) scale(0.8)" fill="#6666ff" />
                </svg>
            )
        case 48: //Eyedropper
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="url(#grad7)" className="bi bi-eyedropper" viewBox="0 0 16 16">
                    <defs>
                        <linearGradient id="grad7" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,255,0)', 'stopOpacity': 1 }} />
                            <stop offset="55%" style={{ 'stopColor': 'rgb(120,120,120)', 'stopOpacity': 1 }} />
                            <stop offset="70%" style={{ 'stopColor': 'rgb(220,220,220)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <path fill="url(#grad7)" d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.854a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
                </svg>
            )
        case 49: //Noise
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-slack" viewBox="0 0 16 16">
                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
            )
        case 50: //Stars
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#ffff99" className="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                </svg>
            )
        case 51: //Image Settings
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="url(#grad8)" className="bi bi-image" viewBox="0 0 16 16">
                    <defs>
                        <linearGradient id="grad8" x1="0%" y1="100%" x2="100%" y2="10%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(200,200,200)', 'stopOpacity': 0 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(200,200,200)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <path transform="scale(0.8) translate(4,0)" d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path transform="scale(0.8) translate(4,0)" d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    <path transform="scale(0.7) translate(0,7)" fill="#ccc" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
            )
        case 52: //Undo
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="#ccc" viewBox="0 0 26 16">
                    <path transform="translate(2, -2) rotate(-10, 11, 10)" d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" />
                </svg>
            )
        case 53: //Redo
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="#ccc" viewBox="0 0 26 16">
                    <path transform="scale(-1,1) translate(-24, -2) rotate(-10, 11, 10)" d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" />
                </svg>
            )
        case 54: //Download
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ccc" className="bi bi-download" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
            )
        case 55: //Restart
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ccc" className="bi bi-clock-history" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    <path transform="scale(0.5) translate(8,8)" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path transform="scale(0.5) translate(8,8)" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                    <path transform="scale(0.5) translate(8,8)" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 56: //Render Active
            return (
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="24px" height="24px" viewBox="0 0 22 22">
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-30 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-60 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-90 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-120 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-150 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-180 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-210 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-240 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-270 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-300 64 64)" />
                    <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2z" fill="#ccc" transform="scale(0.17) rotate(-330 64 64)" />
                </svg>
            )
        case 57: //Render Paused
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ccc" className="bi bi-pause-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                </svg>
            )
        case 58: //Radial Blur
            return (
                <svg height="20" width="20">
                    <defs>
                        <radialGradient id="grad9" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="30%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 0 }} />
                            <stop offset="40%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(200,200,200)', 'stopOpacity': 1 }} />
                            <stop offset="85%" style={{ 'stopColor': 'rgb(50,50,50)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(200,200,200)', 'stopOpacity': 1 }} />
                        </radialGradient>
                    </defs>
                    <ellipse cx="10" cy="10" rx="10" ry="10" fill="url(#grad9)" />
                </svg>
            )
        case 59: //Invert
            return (
                <svg height="20" width="20">
                    <defs>
                        <radialGradient id="grad10" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="15%" style={{ 'stopColor': 'rgb(255,120,0)', 'stopOpacity': 1 }} />
                            <stop offset="30%" style={{ 'stopColor': 'rgb(255,120,0)', 'stopOpacity': 1 }} />
                            <stop offset="60%" style={{ 'stopColor': 'rgb(255,255,200)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(100,100,200)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(50,200,255)', 'stopOpacity': 1 }} />
                        </radialGradient>
                    </defs>
                    <ellipse cx="10" cy="10" rx="10" ry="10" fill="url(#grad10)" />
                </svg>
            )
        case 60: //Sepia
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="url(#grad11)" className="bi bi-square-fill" viewBox="0 0 16 16">
                    <defs>
                        <linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(100,50,30)', 'stopOpacity': 1 }} />
                            <stop offset="20%" style={{ 'stopColor': 'rgb(100,50,30)', 'stopOpacity': 1 }} />
                            <stop offset="20%" style={{ 'stopColor': 'rgb(120,60,30)', 'stopOpacity': 1 }} />
                            <stop offset="40%" style={{ 'stopColor': 'rgb(120,60,30)', 'stopOpacity': 1 }} />
                            <stop offset="40%" style={{ 'stopColor': 'rgb(140,90,30)', 'stopOpacity': 1 }} />
                            <stop offset="60%" style={{ 'stopColor': 'rgb(140,90,30)', 'stopOpacity': 1 }} />
                            <stop offset="60%" style={{ 'stopColor': 'rgb(160,120,30)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(160,120,30)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(180,140,30)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(180,140,30)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                </svg>
            )
        case 61: //Noise
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-dot" viewBox="0 0 16 16">
                    <path transform="scale(0.7) translate(0,5)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(-5,6)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(2,7)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(6,4)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(-5,12)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(0,-5)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(2,-8)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(-3,-6)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(12,1)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(15,6)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(12,7)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(16,0)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(18,12)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(11,-3)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(13,-8)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(9,-6)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(8,10)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(12,8)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(3,5)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(0,0)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(6,0)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(-6,0)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path transform="scale(0.7) translate(0,10)" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
            )
        case 62: //Motion Blur
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="url(#grad12)" className="bi bi-square-fill" viewBox="0 0 16 16">
                    <defs>
                        <linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="10%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="20%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="25%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="30%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="40%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="50%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="60%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="70%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="90%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                </svg>
            )
        case 63: //Motion Blur Direction Up-Down
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 64: //Motion Blur Direction Up-Right
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path transform="rotate(45,8,8)" fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 65: //Motion Blur Direction Right-Left
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path transform="rotate(90,8,8)" fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 66: //Motion Blur Direction Down-Right
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path transform="rotate(135,8,8)" fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 67: //Mosaic Dither
            return (
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="18.000000pt" height="18.000000pt" viewBox="0 0 20.000000 20.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,20.000000) scale(0.00150,-0.00150)"
                        fill="#ccc" stroke="none">
                        <path d="M0 12160 l0 -640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0 -640 0
-640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0 -640 0 -640 640 0 640 0 0
-640 0 -640 -640 0 -640 0 0 -640 0 -640 640 0 640 0 0 -640 0 -640 -640 0
-640 0 0 -640 0 -640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 640
0 640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 640 0 640 0 0 -640 0 -640 640
0 640 0 0 640 0 640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 640 0
640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 640 0
640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 640 0 640 0 0 640 0 640 -640 0
-640 0 0 640 0 640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 640 0
640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0 -640
-640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0 -640 -640 0 -640 0 0 640 0
640 -640 0 -640 0 0 -640 0 -640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0
-640 0 -640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640z m3840 -1280 l0
-640 640 0 640 0 0 640 0 640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0
640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 640 0 640 0 0 -640 0
-640 -640 0 -640 0 0 -640 0 -640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0
-640 0 -640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0 -640 0 -640 640 0 640
0 0 -640 0 -640 -640 0 -640 0 0 -640 0 -640 -640 0 -640 0 0 640 0 640 -640
0 -640 0 0 -640 0 -640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0
-640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0 -640 -640 0 -640 0 0
640 0 640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 640 0 640 0 0
640 0 640 -640 0 -640 0 0 640 0 640 640 0 640 0 0 640 0 640 -640 0 -640 0 0
640 0 640 640 0 640 0 0 640 0 640 640 0 640 0 0 -640z"/>
                        <path d="M2560 9600 l0 -640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0 -640
0 -640 640 0 640 0 0 -640 0 -640 -640 0 -640 0 0 -640 0 -640 640 0 640 0 0
-640 0 -640 640 0 640 0 0 640 0 640 640 0 640 0 0 -640 0 -640 640 0 640 0 0
640 0 640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0 640 -640 0 -640 0 0
640 0 640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 640 0 640 640 0 640 0 0
640 0 640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0 -640 -640 0 -640
0 0 640 0 640 -640 0 -640 0 0 -640 0 -640 -640 0 -640 0 0 640 0 640 -640 0
-640 0 0 -640z m3840 -1280 l0 -640 640 0 640 0 0 640 0 640 640 0 640 0 0
-640 0 -640 -640 0 -640 0 0 -640 0 -640 640 0 640 0 0 -640 0 -640 -640 0
-640 0 0 -640 0 -640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640 0 -640
-640 0 -640 0 0 640 0 640 640 0 640 0 0 640 0 640 -640 0 -640 0 0 640 0 640
640 0 640 0 0 640 0 640 640 0 640 0 0 -640z"/>
                        <path d="M5120 7040 l0 -640 640 0 640 0 0 -640 0 -640 640 0 640 0 0 640 0
640 -640 0 -640 0 0 640 0 640 -640 0 -640 0 0 -640z"/>
                    </g>
                </svg>
            )
        case 68: //Sharpness
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                    <path fill="#111" d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path fill="#666" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />

                    <path transform="scale(0.6) translate(12, -1)" fillRule="evenodd" fill="#ccc" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908l-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                    <path transform="scale(0.6) translate(12, -1)" fillRule="evenodd" fill="#ccc" d="M2.832 13.228L8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                </svg>
            )
        case 69: //Dither Algorithm
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                    <text x="8" y="12" fontFamily="serif" fontSize="11" fill="#ccc" textAnchor="middle">
                        {props.text}
                    </text>
                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                </svg>
            )
        case 70: //Small Arrow Up
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-caret-up-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                </svg>
            )
        case 71: //Small Arrow Down
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-caret-down-square" viewBox="0 0 16 16">
                    <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
                </svg>
            )
        case 72: //Vignette
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" className="bi bi-caret-down-square" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
                    <defs>
                        <radialGradient id="grad13" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 1 }} />
                            <stop offset="80%" style={{ 'stopColor': 'rgb(0,0,0)', 'stopOpacity': 0.8 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 0 }} />
                        </radialGradient>
                    </defs>
                    <ellipse cx="8" cy="8" rx="9" ry="9" fill="url(#grad13)" />
                </svg>
            )
        case 73: //Opacity
            return (
                <svg width="20" height="20" viewBox="0 0 22 22">
                    <defs>
                        <linearGradient id="grad14" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="10%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 0 }} />
                            <stop offset="100%" style={{ 'stopColor': 'rgb(255,255,255)', 'stopOpacity': 1 }} />
                        </linearGradient>
                        <mask id="opacityMask">
                            <rect width="22" height="22" fill="url(#grad14)" style={{ 'strokeWidth': 2, stroke: '#ccc' }} />
                        </mask>
                    </defs>
                    <g mask="url(#opacityMask)">
                        <rect width="22" height="22" style={{ 'strokeWidth': 2, stroke: '#ccc' }} />
                        <rect x="2" y="2" width="9" height="9" fill="rgb(50,50,50)" />
                        <rect x="11" y="2" width="9" height="9" fill="rgb(170,170,170)" />
                        <rect x="2" y="11" width="9" height="9" fill="rgb(170,170,170)" />
                        <rect x="11" y="11" width="9" height="9" fill="rgb(50,50,50)" />
                    </g>
                </svg>
            )
        case 74: //Expand
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ccc" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z" />
                </svg>
            )
        case 75: //Minimize
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ccc" className="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                    <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
                </svg>
            )
        case 76: //Like
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ccc" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
            )
        case 77: //Dislike
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ccc" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                    <path transform="rotate(180,8,8)" d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
            )
        case 78: //Like Selected
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#afa" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                    <path stroke="#171" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z" />
                </svg>
            )
        case 79: //Dislike Selected
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f55" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                    <path transform="rotate(180,8,8)" stroke="#711" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z" />
                </svg>
            )
        case 80: //Chat
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ccc" className="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
            )
        case 81: //Chat Selected
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ccc" className="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path stroke="#666" d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                </svg>
            )
        case 82: //Crop Reset
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ccc" className="bi bi-fullscreen" viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                </svg>
            )
        case 83: //Crop Confirm
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                    <path fill="#9f9" d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
            )
        case 84: //Remove Comment X
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-square removeCommentX" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            )
        case 85: //Hourglass
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ccc" className="bi bi-hourglass removeCommentWait" viewBox="0 0 16 16">
                    <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                </svg>
            )
        case 86: //Delete Confirm Check
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#13EC22" className="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
            )
        case 87: //Delete Cancel X
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#FF4B4E" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            )
        case 88: //Users
        return (
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle navIcon" fill="#ccc" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
            </svg>
        )
        default: return <div></div>
    }
}

export default BootstrapIcon;