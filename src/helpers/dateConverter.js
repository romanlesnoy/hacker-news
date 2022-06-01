const dateConverter = (time) => {
    const newDate = new Date(time * 1000);
    return newDate.toDateString();
};

export default dateConverter;
