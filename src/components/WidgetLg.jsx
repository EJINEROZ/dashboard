import '../css/component/widgetLg.css'


function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Federico Kereki</span>
          </td>
          <td className="widgetLgDate">14 May 2022</td>
          <td className="widgetLgAmount">$2100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ikechi Fortune</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEhykPCKBTzRA/profile-displayphoto-shrink_800_800/0/1634862775537?e=1657756800&v=beta&t=P1dVhgLSGXr0rG0h2e0lsFLk4u5Pt-y5hdkT6t7u5PA"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Isaac Okoro</span>
          </td>
          <td className="widgetLgDate">11 May 2022</td>
          <td className="widgetLgAmount">$700.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Chinda Godwin</span>
          </td>
          <td className="widgetLgDate">9 May 2022</td>
          <td className="widgetLgAmount">$300.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;