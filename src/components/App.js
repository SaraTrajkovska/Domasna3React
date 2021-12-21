import React,{useState} from 'react';


export function App()


class ComposedTextField extends React.Component {
  state = {
    name: '',
    title: '',
    email: '',
    experience: ''
  };

  handleChange = event => {
    this.setState({ 
          name: event.target.value, 
          title: event.target.value,
          email: event.target.value,
          experience: event.target.value
        });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="headline">Header Info</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange}/>
          <p>{this.state.name}</p>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="title-simple">Title</InputLabel>
          <Input id="title-simple" value={this.state.title} onChange={this.handleChange}/>
          <p>{this.state.title}</p>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="email-simple">Email</InputLabel>
          <Input id="email-simple" value={this.state.email} onChange={this.handleChange}/> 
          <p>{this.state.email}</p>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="experience-simple">Experience</InputLabel>
          <Input id="experience-simple" value={this.state.experience} onChange={this.handleChange}/>
          <p>{this.state.experience}</p>
        </FormControl>
      </div>
    );
  }
} 