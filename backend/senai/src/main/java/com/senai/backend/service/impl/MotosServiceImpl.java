package com.senai.backend.service.impl;

import com.senai.backend.models.Motos;
import com.senai.backend.repository.MotosRepository;
import com.senai.backend.service.MotosService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
public class MotosServiceImpl implements MotosService {

    @Autowired
    private MotosRepository motosRepository;

    @Override
    public Page<Motos> getAllMotos(Pageable page, Specification<Motos> spec) {
        return null;
    }

    @Override
    public List<Motos> saveMotos(List<Motos> Motos) {
        List<UUID> motoIds = new ArrayList<>();
        Motos.forEach(moto -> motoIds.add(
                motosRepository.saveAndFlush(moto).getId()
        )
        );
        return motosRepository.findAllById(motoIds);
    }

    @Override
    public Motos updateMotos(Motos moto) {
        Optional<Motos> optionalMoto = motosRepository.findById(moto.getId());

        if(optionalMoto.isPresent()) {
            BeanUtils.copyProperties(moto,optionalMoto.get(),
                    "createdDate");
            return motosRepository.save(optionalMoto.get());
        }
        return null;
    }

    @Transactional(rollbackOn = Exception.class)
    @Override
    public void deleteMotos(UUID id) {
        Optional<Motos> optionalMoto = motosRepository.findById(id);
        optionalMoto.ifPresent(motos -> motosRepository.delete(motos));
    }
}
