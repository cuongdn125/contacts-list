export default url => {
    const paramStirng = url.includes('?') ? url.split('?')[1].split('&') : [];
    const params = {};
    paramStirng.forEach(param => {
        const paramSplit = param.split('=');
        params[paramSplit[0]] = paramSplit[1];
    });
    return params;
}