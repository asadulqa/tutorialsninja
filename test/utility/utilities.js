class Utilities{
    async RandomEmail(){
        const timestamp = Date.now();
        return `testuser${timestamp}@example.com`;

    }
}

module.exports = new Utilities();