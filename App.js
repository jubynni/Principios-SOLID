
// Componente de botón reutilizable
class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

// Componente de pantalla principal
class HomeScreen extends React.Component {
  handleButtonPress = () => {
    // Lógica específica de manejo de botón
    console.log("Botón presionado");
  }

  render() {
    return (
      <View>
        <Text>Bienvenido a la pantalla principal</Text>
        <Button label="Presionar" onPress={this.handleButtonPress} />
      </View>
    );
  }
}