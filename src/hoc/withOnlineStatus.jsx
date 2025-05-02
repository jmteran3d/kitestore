export const withOnlineStatus = (WrappedComponent) => (props) => {
    console.log(`Component props: ${JSON.stringify(props)}`)
    const isOnline = Math.random() > 0.5;
    const data = {
        name: 'JMTeran3D',
        age: '35'
    }
    return <WrappedComponent {...props} isOnline={isOnline} data={data}/>
}