(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(t,e,n){t.exports={history:"TransactionHistory_history__23J6B",history__head:"TransactionHistory_history__head__37eK-"}},16:function(t,e,n){t.exports={dashboard:"Dashboard_dashboard__o7oct"}},18:function(t,e,n){t.exports=n(36)},24:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(2),c=n.n(r),s=(n(23),n(24),n(17)),l=n(7),i=n(8),u=n(10),m=n(9),h=n(11),p=n(15),_=n.n(p),b=n(16),d=n.n(b),E=n(12);n(33);E.a.configure();var f={position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0},v="\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",y="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",x={notEnoughAmount:function(){return E.a.error(v,f)},enterCorrectAmount:function(){return E.a.error(y,f)}},C=n(4),g=n.n(C),w=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={amount:""},n.handleInputChange=function(t){n.setState({amount:Number(t.currentTarget.value)})},n.handleClickDeposit=function(t){t.preventDefault(),n.props.onDeposit(n.state.amount),n.setState({amount:""})},n.handleClickWithdraw=function(t){t.preventDefault(),n.props.onWithdraw(n.state.amount),n.setState({amount:""})},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.amount;return o.a.createElement("section",{className:g.a.controls},o.a.createElement("input",{type:"number",name:"amount",className:g.a.controls__input,value:t,onChange:this.handleInputChange}),o.a.createElement("button",{type:"button",className:g.a.controls__button,onClick:this.handleClickDeposit},"Deposit"),o.a.createElement("button",{type:"button",className:g.a.controls__button,onClick:this.handleClickWithdraw},"Withdraw"))}}]),e}(a.Component),O=n(5),D=n.n(O),T=function(t){var e=t.income,n=t.expenses,a=t.balance;return o.a.createElement("section",{className:D.a.balance},o.a.createElement("span",{className:D.a.balance__txt},"\ufe0f",e.toFixed(2),"$"),o.a.createElement("span",{className:D.a.balance__txt},n.toFixed(2),"$"),o.a.createElement("span",{className:D.a.balance__txt},"Balance: ",a.toFixed(2),"$"))},j=n(13),k=n.n(j),N=function(t){var e=t.items;return o.a.createElement("table",{className:k.a.history},o.a.createElement("thead",{className:k.a.history__head},o.a.createElement("tr",null,o.a.createElement("th",null,"Transaction"),o.a.createElement("th",null,"Amount"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",null,e.map((function(t){return o.a.createElement("tr",{key:t.id},o.a.createElement("td",null,t.type),o.a.createElement("td",null,t.amount.toFixed(2),"$"),o.a.createElement("td",null,t.date))}))))},A={DEPOSITE:"Deposite",WITHDROWAL:"Withdrawal"},S={income:0,expenses:0},W=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={transactions:[],balance:0},n.saveTransaction=function(t,e){var a={id:_.a.generate(),type:e,amount:t,date:(new Date).toLocaleString()};t>0?n.setState((function(t){return{transactions:[].concat(Object(s.a)(t.transactions),[a])}})):x.enterCorrectAmount()},n.depositTransaction=function(t){n.saveTransaction(t,A.DEPOSITE),t>0&&(n.setState((function(e){return{balance:e.balance+t}})),S.income+=t)},n.withdrawTransaction=function(t){t>0&&t<=n.state.balance?(n.setState((function(e){return{balance:e.balance-t}})),n.saveTransaction(t,A.WITHDROWAL),S.expenses+=t):t<=0?x.enterCorrectAmount():x.notEnoughAmount()},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.balance,n=t.transactions,a=S.income,r=S.expenses;return o.a.createElement("div",{className:d.a.dashboard},o.a.createElement(w,{onDeposit:this.depositTransaction,onWithdraw:this.withdrawTransaction}),o.a.createElement(T,{income:a,expenses:r,balance:e}),o.a.createElement(N,{items:n}))}}]),e}(a.Component),I=function(){return o.a.createElement(W,null)};c.a.render(o.a.createElement(I,null),document.getElementById("root"))},4:function(t,e,n){t.exports={controls:"Controls_controls__2FVr0",controls__input:"Controls_controls__input__2x-r-",controls__button:"Controls_controls__button__j340m"}},5:function(t,e,n){t.exports={balance:"Balance_balance__-tFES",balance__txt:"Balance_balance__txt__1oErG"}}},[[18,1,2]]]);
//# sourceMappingURL=main.fe66d5fa.chunk.js.map