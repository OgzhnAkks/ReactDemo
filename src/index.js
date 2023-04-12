import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = { search: "" };
  timeout = null;

  /*
       Mantık hatası : 
        inputChange fonksiyonu, kullanıcının herhangi bir şey girdiğinde tetiklenir ve 
        event.target.value özelliği aracılığıyla giriş alanından gelen değeri alır. Fonksiyonun ilk halinde (Düzeltilmemiş halinde) bir
        mantık hatası var.
        Fonksiyon içerisinde, (setTimeout) kullanılarak bir gecikme ayarlanır ve bu süre boyunca (this.timeout) adlı bir zamanlayıcı 
        öğesi bulunur ve gecikme süresi sona erdiğinde (setState) işlevi kullanılarak (search) durum değişkeni ayarlanır.
        Ancak bu işlemi yaparken bileşenin durumu önceden güncellenmiş olabilir ve bu sebepten ötürü (event.target.value) girdi alanındaki değeri temsil etmeyebilir ve
        sonuç olarak bu mantık hatası, kullanıcının girdiği değeri doğru şekilde almayı engelleyebilir ve beklenmedik sonuçlara neden olabilir.

        Cannot read properties of null (reading 'value') (Input girildiğibde ekranda karşılaşılacak hata)


*/

  inputChange = (event) => {
    const inputElement = document.getElementById("myInput");

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: inputElement.value
      });
    }, 50);
  };

  render() {
    return (
      <div>
        <input type="text" id="myInput" onChange={this.inputChange} />
        {this.state.search ? <p>Aranan Değer: {this.state.search}</p> : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
