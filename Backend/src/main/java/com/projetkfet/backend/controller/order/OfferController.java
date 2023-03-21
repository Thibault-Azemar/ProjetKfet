package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.OfferRepository;
import com.projetkfet.backend.dto.order.OfferListDTO;
import com.projetkfet.backend.model.order.Offer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/offer")
public class OfferController {

    private static final Logger logger = LogManager.getLogger("OrderLogger");

    @Autowired
    private OfferRepository offerRepository;

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Offer> getAllOffers() throws Exception {
        logger.info("All offers");
        return offerRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewOffer(@RequestParam("name") String name, @RequestParam("price") String price, @RequestParam("priceMember") String priceMember, @RequestParam("nbproducts") String nbproducts, @RequestBody(required = false) OfferListDTO offerList) throws Exception {
        logger.info("New Offer : " + name);

        UUID id = null;

        Offer offer = new Offer();

        offer.setName(name);
        offer.setPrice(Float.parseFloat(price));
        offer.setPriceMembers(Float.parseFloat(priceMember));
        offer.setNbproducts(Integer.parseInt(nbproducts));

        if (offerList.getProductIds() != null) {
            offer.setProductIds(offerList.getProductIds());
        }

        if (offerList.getSubcatIds() != null) {
            offer.setSubcatIds(offerList.getSubcatIds());
        }

        if (offerList.getCatIds() != null) {
            offer.setCatIds(offerList.getCatIds());
        }

        offerRepository.save(offer);

        Optional<Offer> off = offerRepository.findByName(name);

        if (off.isPresent())
        {
            Offer o = off.get();
            id = o.getId();
            logger.info("Id Offer : "+ id);
        }
        else
        {
            logger.info("Error create Offre");
            throw new Exception("Error create Offer");
        }

        return id;
    }

    //    UPDATE

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteOffer(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Offer");
        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            offerRepository.delete(o.get());
            logger.info("Offer deleted : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }

    }
}
