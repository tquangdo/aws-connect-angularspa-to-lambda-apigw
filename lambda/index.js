exports.handler = async (event, context, callback) => {
    const responseData = [
        { title: 'Vue.js', value: 42 },
        { title: 'Full Project', value: 28 },
        { title: 'Electron', value: 26 },
        { title: 'Angular', value: 25 },
        { title: 'Laravel', value: 21 }
    ];
    callback(null, responseData);
};
