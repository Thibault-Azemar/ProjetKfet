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
@CrossOrigin(origins = "*")
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
    UUID addNewOffer(@RequestParam("name") String name, @RequestParam("price") String price, @RequestParam("priceMember") String priceMember, @RequestParam("nbProducts") String nbproducts, @RequestBody(required = false) OfferListDTO offerList) throws Exception {
        logger.info("New Offer : " + name);

        UUID id = null;

        Offer offer = new Offer();

        offer.setName(name);
        offer.setPrice(Float.parseFloat(price));
        offer.setPriceMembers(Float.parseFloat(priceMember));
        offer.setNbproducts(Integer.parseInt(nbproducts));

        if (offerList != null)
        {
            if (offerList.getProductIds() != null) {
                offer.setProductIds(offerList.getProductIds());
            }

            if (offerList.getSubcatIds() != null) {
                offer.setSubcatIds(offerList.getSubcatIds());
            }

            if (offerList.getCatIds() != null) {
                offer.setCatIds(offerList.getCatIds());
            }
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

    @PatchMapping(path="/category/add")
    public @ResponseBody
    String addOneCategory(@RequestParam("id") String id, @RequestParam("catId") String catId) throws Exception {
        logger.info("Add one category to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.addCatId(UUID.fromString(catId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

    @PatchMapping(path="/subcat/add")
    public @ResponseBody
    String addOneSubCategory(@RequestParam("id") String id, @RequestParam("subcatId") String subcatId) throws Exception {
        logger.info("Add one subcategory to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.addSubcatId(UUID.fromString(subcatId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

    @PatchMapping(path="/product/add")
    public @ResponseBody
    String addOneProduct(@RequestParam("id") String id, @RequestParam("productId") String productId) throws Exception {
        logger.info("Add one product to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.addProductId(UUID.fromString(productId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

    @PatchMapping(path="/category/remove")
    public @ResponseBody
    String removeOneCategory(@RequestParam("id") String id, @RequestParam("catId") String catId) throws Exception {
        logger.info("Remove one category to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.removeCatId(UUID.fromString(catId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

    @PatchMapping(path="/subcat/remove")
    public @ResponseBody
    String removeOneSubCategory(@RequestParam("id") String id, @RequestParam("subcatId") String subcatId) throws Exception {
        logger.info("Remove one subcategory to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.removeSubcatId(UUID.fromString(subcatId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

    @PatchMapping(path="/product/remove")
    public @ResponseBody
    String removeOneProduct(@RequestParam("id") String id, @RequestParam("productId") String productId) throws Exception {
        logger.info("Remove one product to offer : " + id);

        Optional<Offer> o = offerRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            Offer offer = o.get();
            offer.removeProductId(UUID.fromString(productId));
            offerRepository.save(offer);
            logger.info("Offer updated : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No offer for this ID");
            throw new Exception("No offer for this ID");
        }
    }

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
