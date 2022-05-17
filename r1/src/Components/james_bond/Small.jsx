function Small({side, sc}) {

    if (!sc) {
        return null;
    }

    return (
        <div className="too-small clickable" style={
            {
                left: side === 'left' ? '-10px' : null,
                right: side === 'right' ? '-10px' : null,
            }
        }></div>
    )
}

export default Small;