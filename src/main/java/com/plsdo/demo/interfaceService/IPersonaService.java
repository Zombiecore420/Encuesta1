package com.plsdo.demo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.plsdo.demo.modelo.Persona; //Importa la clase persona

public interface IPersonaService {

	public List<Persona>list();
	public Optional<Persona>listarId(int id);
	public int save(Persona p);
	public void delete(int id);
	
}
