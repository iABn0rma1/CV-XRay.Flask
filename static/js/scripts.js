console.clear();

new Vue({
    el: '.result',
    data: () => ({
        cvData: []
    }),
    methods: {
        uploadFiles(e) {
        const formData = new FormData();
        const files = this.$refs.fileInput.files;
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }

        fetch('/', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            this.cvData = data.cv_data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        },
        copy() {
        const output = this.cvData.map(entry => 
            `File Name: ${entry.file_name}\nEmail: ${entry.email}\nPhone Number: ${entry.phone_number}`
        ).join('\n\n');

        const textarea = document.createElement('textarea');
        textarea.value = output;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copied to clipboard');
        }
    }
});
