export function parseTexts (aData) {
    return aData.map((data, i) => {
        let result = 
        <li className="custom-li" key={i}>
            {
                data.header ?
                    <h5 className={"Text-header" + (data.headerList || data.headerList2 ? '-list-' : '-') + "font"}>{data.header.toUpperCase()}</h5>
                : null
            }
            {data.data ? <div className="Text-content">{data.data}</div> : null}
            {
                data.table ? 
                    <table className="Terminos-table">
                        <thead>
                            {data.table.map((item, j) => 
                                <tr key={i + "-" + j}>
                                    <th>{item.head.toUpperCase()}</th>
                                    <td>{item.data}</td>
                                </tr>
                            )}
                        </thead>
                    </table> 
                : null
            }
            {
                /*
                    HEADER
                    Title1. Content 
                */
                data.headerList ? 
                    <div>
                        <ul className="Text-main-list-left">
                            {data.items.map((item, j) => 
                                <li className={data.withMargin ? 'Text-content-list Text-content' : ''} key={i + "-" + j}>
                                    <span style={{ fontWeight: "bold" }}>{item.title ? item.title + ": " : ""}</span>
                                    <span>{item.data}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                : null
            }
            {
                /*
                    HEADER (o no)
                    - Items
                */
                data.headerList2 ? 
                    <div>
                        <ul className="Text-content-list Text-content" style={{listStyle: data.listStyle || 'outside' }}>
                            {data.items.map((text, j) => 
                                <li key={i + "-" + j}>
                                    <span>{text}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                : null
            }
        </li>;
        return result;
    })
}