{
    (function uploadFileHandler() {
        let files = []
        let inputWrapItems = document.querySelectorAll('.input-file');
        if(inputWrapItems.length) {
            inputWrapItems.forEach(inputWrap => {
                let input = inputWrap.querySelector('input[type="file"]');
                let info = inputWrap.querySelector('.input-file__info');


                const changeHandler = (event) => {
                    if (!event.target.files.length) {
                        return
                    }
    
                    files = Array.from(event.target.files)
    
                    let result = files.map(item => item.name);
                    info.innerText = result.join(', ');
                }
    
                input.addEventListener('change', changeHandler);
            })
        }
    })()
}