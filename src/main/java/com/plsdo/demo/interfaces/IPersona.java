package com.plsdo.demo.interfaces;

import org.springframework.data.repository.CrudRepository; //Importa la clase CrudRepository
import org.springframework.stereotype.Repository;

import com.plsdo.demo.modelo.Persona; //Importa la clase persona

@Repository
public interface IPersona extends CrudRepository<Persona, Integer> {

}
