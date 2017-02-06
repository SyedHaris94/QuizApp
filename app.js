

ReactDOM.render(React.createElement(
  "h1",
  { id: "head" },
  " Quiz app",
  React.createElement(
    "div",
    { id: "nav" },
    React.createElement(
      "button",
      { id: "signup" },
      "Sign UP"
    ),
    React.createElement(
      "button",
      { id: "signup" },
      "Sign UP"
    )
  ),
  React.createElement(
    "div",
    { id: "container" },
    React.createElement(
      "h1",
      null,
      "SIGN UP"
    ),
    React.createElement("p", { id: "p1" }),
    React.createElement("input", { type: "text", className: "same", id: "name", placeholder: "First Name" }),
    React.createElement("input", { type: "email", className: "same", id: "email", placeholder: "Email Address" }),
    React.createElement("input", { type: "password", className: "same", id: "pswd", placeholder: "Password" }),
    React.createElement("input", { type: "submit", id: "btn", value: "SIGN UP", onclick: "signup()" })
  ),
  React.createElement(
    "div",
    { id: "container1" },
    React.createElement(
      "h1",
      null,
      "SIGN IN"
    ),
    React.createElement("p", { id: "p1" }),
    React.createElement("input", { type: "email", className: "same", id: "email", placeholder: "Email Address" }),
    React.createElement("input", { type: "password", className: "same", id: "pswd", placeholder: "Password" }),
    React.createElement("input", { type: "submit", id: "btn1", value: "SIGN IN", onclick: "logIn();" })
  )
), document.getElementById('app'));

var questions = [
    ["ReactJS is developed by _____?",'Google' ,'Facebook','Microsoft','B'],
    ['ReactJS is an MVC based framework ?','Yes ','Both','No','C'],
    ['Which of the following is used to pass the data from parent to child ?' ,'State','Props','React.DOM','A'],
    ['JSX transformer is a MUST to work with ReactJS','True','False','Dont Know','B'],
    ['Which of the following needs to be updated to achieve dynamic UI updates ?','render','renderComponent','getInitialState','C']

] ;

var  pos = 0, correct = 0 , choice ,percentage;



var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             correct: this.props.correct,
             pos: this.props.pos,
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
         }
     },
  
     _checkAnswer: function(e){
          choices = document.getElementsByName('answer');
          console.log(choices);
          for (var i = 0; i < choices.length; i++) {
          if(choices[i].checked){
              choice = choices[i].value;
          }
       }
            if(choice == this.props.data[pos][4]){
                this.setState({
                    correct: correct++,
                })
                
            }
          this.setState({
            pos: ++pos,
          }) 
          if(pos < this.props.data.length){
              this.setState({
               
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
            
        })
          }
       
          
        

     },
     _showQuestion: function(){
           
            if(this.state.pos >= this.props.data.length){
               percentage = correct*20;
              return React.DOM.div(
                    {
                        id:'complete'
                    },
                    React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "PERCENTAGE"),
                      React.DOM.h2(null, percentage + ' %')
                      ),
                     React.DOM.span({className:'resultBox'},
                      React.DOM.h2(null, "CORRECT ANSWER"),
                      React.DOM.h2(null, correct)
                      )
                 )
             } else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(
                             {
                                 id:'status'
                             },
                            React.DOM.h1(null,"QUESTION "+ (this.state.pos+1) +" OF " +this.props.data.length )
                          ),
                         React.DOM.h4(
                             {
                                 id:'question'
                             }, (this.state.pos+1) +'.  '+this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'B'                          
                                 }
                             ),
                             this.state.opt2,
                             React.DOM.br(null),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    className:'optionBtn',
                                    name: 'answer',
                                    value:'C'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                    id:'nextBtn', 
                                    type: "button",
                                    onClick: this._checkAnswer
                                 },
                                 'NEXT'
                             )
                     );
             }
         
                 
     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div( 
                    {
                    id: 'header'
                    },
                    React.DOM.h1(null,"REACT QUIZ")
             ),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     {
                        id:'test'
                     },
                     this._showQuestion() 
                  )  
             )
         )
     }
});


ReactDOM.render(
    React.DOM.div(
       null,
       React.createElement(quizRender,
       {
           data: questions,
           pos: pos,
           correct: correct,
       }
       )
    ),
    document.getElementById('app')
);


